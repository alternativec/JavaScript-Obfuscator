import JavaScriptObfuscator from 'javascript-obfuscator';

export interface ObfuscationOptions {
    enableRenaming: boolean;
    enableStringEncryption?: boolean;
    enableNumberObfuscation?: boolean;
    enableControlFlowFlattening?: boolean;
    enableDeadCodeInjection?: boolean;
    enableSplitStrings?: boolean;
    enableDebugProtection?: boolean;
    enableSelfDefending?: boolean;
}

export class ObfuscatorEngine {
    private options: ObfuscationOptions;

    constructor(options: ObfuscationOptions) {
        this.options = options;
    }

    public obfuscate(code: string): string {
        try {
            const obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
                compact: true,
                controlFlowFlattening: this.options.enableControlFlowFlattening || false,
                controlFlowFlatteningThreshold: 1,
                numbersToExpressions: this.options.enableNumberObfuscation || false,
                simplify: true,
                stringArray: this.options.enableStringEncryption || false,
                stringArrayEncoding: this.options.enableStringEncryption ? ['base64'] : [],
                stringArrayThreshold: 1,
                splitStrings: this.options.enableSplitStrings || false,
                splitStringsChunkLength: 5,
                stringArrayWrappersCount: 5,
                identifierNamesGenerator: this.options.enableRenaming ? 'hexadecimal' : 'mangled',
                renameGlobals: this.options.enableRenaming,
                deadCodeInjection: this.options.enableDeadCodeInjection || false,
                deadCodeInjectionThreshold: 0.4,
                debugProtection: this.options.enableDebugProtection || false,
                debugProtectionInterval: 4000,
                selfDefending: this.options.enableSelfDefending || false,
            });

            let result = obfuscationResult.getObfuscatedCode();

            return result;
        } catch (error) {
            console.error("Obfuscation error:", error);
            throw new Error("Failed to obfuscate JavaScript code: " + error);
        }
    }

    private removeComments(code: string): string {
        return code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
    }
}
