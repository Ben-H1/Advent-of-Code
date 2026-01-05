type DeviceList = Record<string, string[]>;

const parseDeviceList = (input: string): DeviceList => {
    return input.split('\n').reduce((devices, line) => {
        const [name, outputsString] = line.split(': ');
        devices[name] = outputsString.split(' ');
        return devices;
    }, {} as DeviceList);
};

const getNestedPaths = (deviceList: DeviceList, startDevice: string, endDevice: string) => {
    const outputs = deviceList[startDevice];
    let paths: any = [];

    outputs.forEach(output => {
        if (output === endDevice) {
            paths.push(output);
        } else {
            paths.push(getNestedPaths(deviceList, output, endDevice));
        }
    });

    return paths;
};

const getValidPathCount = (deviceList: DeviceList, startDevice: string, endDevice: string, mustInclude: string[]): number => {
    let iterations = 0;

    const depthFirstSearch = (current: string, path: string[]): number => {
        const outputs = deviceList[current];
        let count = 0;

        outputs.forEach(output => {
            iterations++;
            if (iterations % 1_000_000_000 === 0) {
                console.log(`Iterations: ${iterations} | Count: ${count}`);
            }

            const newPath = [...path, output];
            const hasDuplicates = newPath.length !== new Set(newPath).size;
            if (hasDuplicates) {
                return;
            }
            if (output === endDevice) {
                if (mustInclude.every(v => newPath.includes(v))) {
                    count++;
                };
            } else {
                count += depthFirstSearch(output, newPath);
            }
        });

        return count;
    };

    return depthFirstSearch(startDevice, [startDevice]);
};

// const getValidPathCount = (deviceList: DeviceList, startDevice: string, endDevice: string, mustInclude: string[]): number => {
//     // map mustInclude nodes to bit positions
//     const indexMap = new Map<string, number>();
//     mustInclude.forEach((v, i) => indexMap.set(v, i));
//     const allMask = (1 << mustInclude.length) - 1;

//     // detect cycles in the graph (simple DFS)
//     const isAcyclic = (): boolean => {
//         const state = new Map<string, 0 | 1 | 2>(); // 0=unseen,1=visiting,2=done
//         const nodes = Object.keys(deviceList);
//         const dfs = (n: string): boolean => {
//             state.set(n, 1);
//             for (const out of deviceList[n] || []) {
//                 const s = state.get(out) ?? 0;
//                 if (s === 1) return false; // back edge -> cycle
//                 if (s === 0 && !dfs(out)) return false;
//             }
//             state.set(n, 2);
//             return true;
//         };
//         for (const n of nodes) {
//             if ((state.get(n) ?? 0) === 0 && !dfs(n)) return false;
//         }
//         return true;
//     };

//     if (isAcyclic()) {
//         // fast memoized DP: key = node|mask
//         const memo = new Map<string, number>();
//         const dfsMemo = (current: string, mask: number): number => {
//             const key = current + '|' + mask;
//             const cached = memo.get(key);
//             if (cached !== undefined) return cached;
//             if (current === endDevice) {
//                 const res = mask === allMask ? 1 : 0;
//                 memo.set(key, res);
//                 return res;
//             }
//             let count = 0;
//             for (const out of deviceList[current] || []) {
//                 let nextMask = mask;
//                 const idx = indexMap.get(out);
//                 if (idx !== undefined) nextMask |= (1 << idx);
//                 count += dfsMemo(out, nextMask);
//             }
//             memo.set(key, count);
//             return count;
//         };

//         const startMask = indexMap.has(startDevice) ? (1 << indexMap.get(startDevice)!) : 0;
//         return dfsMemo(startDevice, startMask);
//     } else {
//         // safe DFS that prevents revisiting nodes on the same path (avoids infinite loops)
//         const dfsSafe = (current: string, visited: Set<string>, mask: number): number => {
//             if (visited.has(current)) return 0;
//             if (current === endDevice) return mask === allMask ? 1 : 0;
//             visited.add(current);
//             let count = 0;
//             for (const out of deviceList[current] || []) {
//                 let nextMask = mask;
//                 const idx = indexMap.get(out);
//                 if (idx !== undefined) nextMask |= (1 << idx);
//                 count += dfsSafe(out, visited, nextMask);
//             }
//             visited.delete(current);
//             return count;
//         };

//         const startMask = indexMap.has(startDevice) ? (1 << indexMap.get(startDevice)!) : 0;
//         return dfsSafe(startDevice, new Set<string>(), startMask);
//     }
// };

// const getPaths = (deviceList: DeviceList, startDevice: string, endDevice: string): string[][] => {
//     const outputs = deviceList[startDevice];
//     const paths: string[][] = [];

//     outputs.forEach(output => {
//         if (output === endDevice) {
//             paths.push([output]);
//         } else {
//             const subpaths = getPaths(deviceList, output, endDevice);
//             subpaths.forEach(path => paths.push([output, ...path]));
//         }
//         console.log(JSON.stringify(paths));
//     });

//     return paths;
// };

export const part1Solution = (input: string): string => {
    const deviceList = parseDeviceList(input);

    const nestedPaths = getNestedPaths(deviceList, 'you', 'out');

    const pathCount = nestedPaths.flat(Infinity).length;

    return pathCount.toString();
};

export const part2Solution = (input: string): string => {
    const deviceList = parseDeviceList(input);

    const pathCount = getValidPathCount(deviceList, 'svr', 'out', ['dac', 'fft']);

    return pathCount.toString();
};
