import { Day } from '@pages/DayTemplate';
import { descriptions } from './descriptions';
import { inputs } from './inputs';

enum ModuleType {
    FlipFlop = '%',
    Conjunction = '&',
    Broadcaster = 'B'
}

enum PulseType {
    Low = 'L',
    High = 'H'
}

const parseModules = (input: string) => {
    const lines = input.split('\n');
    const modules = new Map();

    lines.forEach((line) => {
        const nameTargetSplit = line.split(' -> ');
        const nameAndType = nameTargetSplit[0];
        const targets = nameTargetSplit[1].split(', ');

        let name;
        let type;

        if (nameAndType.includes('%')) {
            name = nameAndType.split('%')[1];
            type = ModuleType.FlipFlop;

            modules.set(name, {
                type,
                targets,
                state: PulseType.Low
            });
        } else if (nameAndType.includes('&')) {
            name = nameAndType.split('&')[1];
            type = ModuleType.Conjunction;

            modules.set(name, {
                type,
                targets,
                lastPulses: new Map()
            });
        } else {
            name = nameAndType;
            type = ModuleType.Broadcaster;

            modules.set(name, {
                type,
                targets
            });
        }
    });

    return modules;
};

const getOppositePulseType = (pulse: PulseType) => {
    if (pulse === PulseType.High) {
        return PulseType.Low;
    } else {
        return PulseType.High;
    }
};

const part1Solution = (input: string): string => {
    const modules = parseModules(input);

    const counts = {
        [PulseType.Low]: 0,
        [PulseType.High]: 0
    };

    const buttonPushCount = 1;

    for (let i = 0; i < buttonPushCount; i++) {
        let currentPulses = modules.get('broadcaster').targets.map((t: string) => ({ sender: 'broadcaster', name: t, type: PulseType.Low }));
        counts[PulseType.Low] += 1 + currentPulses.length;
        
        do {
            currentPulses.forEach((pulse: any, i: number) => {
                console.log(pulse);
                const module = modules.get(pulse.name);
                
                if (module) {
                    if (module.type === ModuleType.FlipFlop) {
                        if (pulse.type === PulseType.Low) {
                            const newState = getOppositePulseType(module.state);
                            module.targets.forEach((t: string) => currentPulses.push({ sender: pulse.name, name: t, type: newState }));
                            module.state = newState;
        
                            counts[newState] += module.targets.length;
                        }
                    } else { // Conjunction
                        const lastPulses = module.lastPulses;
                        lastPulses.set(pulse.sender, pulse.type);
                        const lastPulseInputs = Array.from(lastPulses.keys());
                        console.log(lastPulses);
        
                        let nextState = PulseType.High;
                        if (lastPulseInputs.every(k => lastPulses.get(k) === PulseType.High)) {
                            nextState = PulseType.Low;
                        }
                        console.log(nextState);

                        module.targets.forEach((t: string) => currentPulses.push({ sender: pulse.name, name: t, type: nextState }));
                        counts[nextState] += module.targets.length;
                    }
                }

                currentPulses[i] = undefined;
            });
        
            currentPulses = currentPulses.filter((p: any) => p !== undefined);
        } while (currentPulses.length > 0);
    }

    console.log(counts);

    const lowPulseCount = counts[PulseType.Low];
    const highPulseCount = counts[PulseType.High];

    const pulseCountProduct = lowPulseCount * highPulseCount;

    return pulseCountProduct.toString();
};

const part2Solution = (input: string): string => {
    return '';
};

export const day20: Day = {
    title: 'Day 20: Pulse Propagation',
    link: '/2023/day20',
    stars: 0,
    part1: {
        description: descriptions.part1Description,
        solution: part1Solution,
        exampleInput: inputs.part1.exampleInput,
        givenInput: inputs.part1.givenInput
    },
    // part2: {
    //     description: descriptions.part2Description,
    //     solution: part2Solution,
    //     exampleInput: inputs.part2.exampleInput,
    //     givenInput: inputs.part2.givenInput
    // }
};
