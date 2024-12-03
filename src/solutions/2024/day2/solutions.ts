const parseReports = (input: string) => {
    return input.split('\n').map(l => l.split(' ').map(l => parseInt(l)));
};

const evaluateReport = (report: number[]) => {
    const changes = report.reduce((a: number[], b, i) => {
        if (i !== 0) {
            a.push(b - report[i - 1]);
        }
        return a;
    }, []);

    if (changes.includes(0)) {
        return false;
    } else if (changes.some(c => Math.abs(c) > 3 || Math.abs(c) < 1)) {
        return false;
    } else if (changes.some(c => c < 0) && changes.some(c => c > 0)) {
        return false;
    }

    return true;
};

export const part1Solution = (input: string): string => {
    const reports = parseReports(input);

    const reportEvaluations = reports.map(r => evaluateReport(r));

    const safeReportCount = reportEvaluations.filter(Boolean).length;

    return safeReportCount.toString();
};

export const part2Solution = (input: string): string => {
    const reports = parseReports(input);

    const reportEvaluations = reports.map(r => {
        const evaluation = evaluateReport(r);

        if (evaluation) {
            return true;
        }

        const dampenedReports = [];

        for (let i = 0; i < r.length; i++) {
            const newReport = [...r];
            newReport.splice(i, 1);
            dampenedReports.push(newReport);
        }

        const dampenedReportEvaluations = dampenedReports.map(r => evaluateReport(r));

        return dampenedReportEvaluations.some(Boolean);
    });

    const safeReportCount = reportEvaluations.filter(Boolean).length;
    
    return safeReportCount.toString();
};
