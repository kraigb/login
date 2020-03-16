import * as io from '@actions/io';
import * as exec from '@actions/exec';

export default class PowerShellToolRunner {
    static psPath: string;

    static async init() {
        if(!PowerShellToolRunner.psPath) {
            PowerShellToolRunner.psPath = await io.which("pwsh", true);
        }
    }

    static async executePowerShellCommand(command: string, options: any = {}) {
        try {
            await exec.exec(`"${PowerShellToolRunner.psPath}" -Command "${command}"`, [], options);
        } catch(error) {
            throw new Error(error);
        }
    }
}