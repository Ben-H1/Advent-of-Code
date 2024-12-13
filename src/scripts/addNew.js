import { number, select } from '@inquirer/prompts';
import fs from 'fs';
import path from 'path';

const dayContent = `import { Day } from '@pages/DayTemplate';
import { part1Description, part2Description } from './descriptions';
import { inputs } from './inputs';
import { part1Solution, part2Solution } from './solutions';

export const dayX: Day = {
    title: 'Day X: TITLE',
    stars: 0,
    part1: {
        description: part1Description,
        solution: part1Solution,
        exampleInput: inputs.part1.exampleInput,
        givenInput: inputs.part1.givenInput
    },
    part2: {
        description: part2Description,
        solution: part2Solution,
        exampleInput: inputs.part2.exampleInput,
        givenInput: inputs.part2.givenInput
    }
};
`;

const descriptionsContent = `export const part1Description = (<>
    <p>Part 1 description</p>
</>);

export const part2Description = (<>
    <p>Part 2 description</p>
</>);
`;

const inputsContent = `const part1ExampleInput = \`\`;

const part2ExampleInput = \`\`;

const givenInput = \`\`;

export const inputs = {
    part1: {
        exampleInput: part1ExampleInput,
        givenInput
    },
    part2: {
        exampleInput: part2ExampleInput,
        givenInput
    }
};
`;

const solutionsContent = `export const part1Solution = (input: string): string => {
    return 'Part 1 solution';
};

export const part2Solution = (input: string): string => {
    return 'Part 2 solution';
};
`;

const addDay = async () => {
    const yearFiles = fs.readdirSync('../solutions');
    const yearFolders = yearFiles.filter(f => path.extname(f) === '');

    const selectedYear = await select({
        message: 'Which year do you want to add to?',
        choices: yearFolders.map(y => ({ name: y, value: y }))
    });

    const dayFiles = fs.readdirSync(`../solutions/${selectedYear}`);
    const dayFolders = dayFiles.filter(f => path.extname(f) === '');

    const newDayNumber = await number({ message: 'Which number day?' });
    const newDayFolderName = `day${newDayNumber}`;

    if (dayFolders.includes(newDayFolderName)) {
        console.log('Day already exists.');
        return;
    }

    const allDayFolders = [...dayFolders, newDayFolderName].sort((a, b) => parseInt(a.replace('day', '') - parseInt(b.replace('day', ''))));
    const chunks = [];

    for (let i = 0; i < allDayFolders.length; i += 7) {
        chunks.push(allDayFolders.slice(i, i + 7));
    }

    let indexContent = `import { Day } from '@pages/DayTemplate';\n`;
    allDayFolders.forEach(f => indexContent += `import { ${f} } from './${f}/${f}';\n`);
    indexContent += '\nexport const days: Day[] = [\n';
    chunks.forEach((c, i) => indexContent += `    ${c.join(', ')}${(i !== chunks.length - 1) ? ',' : ''}\n`);
    indexContent += '];\n';

    const newDir = `../solutions/${selectedYear}/${newDayFolderName}`;
    fs.mkdirSync(newDir);

    fs.writeFileSync(`${newDir}/${newDayFolderName}.ts`, dayContent.replace('dayX', newDayFolderName).replace('Day X', `Day ${newDayNumber}`));
    fs.writeFileSync(`${newDir}/descriptions.tsx`, descriptionsContent);
    fs.writeFileSync(`${newDir}/inputs.ts`, inputsContent);
    fs.writeFileSync(`${newDir}/solutions.ts`, solutionsContent);

    fs.writeFileSync(`../solutions/${selectedYear}/days.ts`, indexContent);

    console.log(`Day ${newDayNumber} created.`);
};

const addYear = async () => {
    const yearFiles = fs.readdirSync('../solutions');
    const yearFolders = yearFiles.filter(f => path.extname(f) === '');

    const newYearNumber = await number({ message: 'Which number year?' });
    const newYearFolderName = newYearNumber.toString();

    if (yearFolders.includes(newYearFolderName)) {
        console.log('Year already exists.');
        return;
    }

    const dayIndexContent = `import { Day } from '@pages/DayTemplate';\n\nexport const days: Day[] = [];\n`;

    const allYearFolders = [...yearFolders, newYearFolderName];
    let yearIndexContent = `import { Day } from '@pages/DayTemplate';\n`;
    allYearFolders.forEach(f => yearIndexContent += `import { days as days${f} } from './${f}/days';\n`);
    yearIndexContent += `\nexport const years: Record<string, Day[]> = {\n`;
    allYearFolders.map((f, i) => yearIndexContent += `    '${f}': days${f}${(i !== allYearFolders.length - 1) ? ',' : ''}\n`);
    yearIndexContent += '};\n';

    const newDir = `../solutions/${newYearFolderName}`;
    fs.mkdirSync(newDir);

    fs.writeFileSync(`${newDir}/days.ts`, dayIndexContent);
    fs.writeFileSync(`../solutions/years.ts`, yearIndexContent);

    console.log(`Year ${newYearFolderName} created.`);
};

const main = async () => {
    const answer = await select({
        message: 'What do you want to do?',
        choices: [
            {
                name: 'Add a new day',
                value: 'day'
            },
            {
                name: 'Add a new year',
                value: 'year'
            }
        ]
    });

    switch (answer) {
        case 'day': {
            await addDay();
            break;
        }
        case 'year': {
            await addYear();
            break;
        }
    }
};

main();
