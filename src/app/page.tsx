"use client";

import React, { useState } from "react";
import { CodeEditor } from "@/components/CodeEditor";
import { ObfuscatorEngine, ObfuscationOptions } from "@/core/obfuscator/ObfuscatorEngine";
import styles from "./page.module.css";

const DEFAULT_CODE = `function hello() {
    console.log("Hello World");
    const secret = "Super Secret String";
    let x = 100;
    if (x > 50) {
        console.log(secret);
    }
}

hello();`;

export default function Home() {
  const [inputCode, setInputCode] = useState(DEFAULT_CODE);
  const [outputCode, setOutputCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [options, setOptions] = useState<ObfuscationOptions>({
    enableRenaming: true,
    enableStringEncryption: true,
    enableNumberObfuscation: false,
    enableControlFlowFlattening: false,
    enableDeadCodeInjection: false,
    enableSplitStrings: false,
    enableDebugProtection: false,
    enableSelfDefending: false,
  });

  const handleObfuscate = async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 100)); // Yield to UI

      const engine = new ObfuscatorEngine(options);
      const result = engine.obfuscate(inputCode);
      setOutputCode(result);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred during obfuscation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>JavaScript Obfuscator</h1>
        <p className={styles.subtitle}>Secure your JavaScript source code with advanced obfuscation.</p>
      </header>

      <div className={styles.editorSection}>
        <div className={styles.column}>
          <div className={styles.toolbar}>
            <label className={styles.label}>JavaScript Source Code</label>
          </div>
          <div className={styles.editorWrapper}>
            <CodeEditor value={inputCode} onChange={(val) => setInputCode(val || "")} language="javascript" />
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.toolbar}>
            <label className={styles.label}>Obfuscated Code</label>
            <button
              onClick={handleObfuscate}
              disabled={loading}
              className={styles.button}
            >
              {loading ? "Processing..." : "Obfuscate"}
            </button>
          </div>
          <div className={styles.editorWrapper}>
            {error && (
              <div className={styles.errorOverlay}>
                <strong>Error:</strong> {error}
              </div>
            )}
            <CodeEditor value={outputCode} readOnly={true} language="javascript" />
          </div>
        </div>
      </div>

      <div className={styles.optionsPanel}>
        <h2 className={styles.optionsTitle}>Configuration</h2>
        <div className={styles.optionsGrid}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={options.enableRenaming}
              onChange={(e) => setOptions({ ...options, enableRenaming: e.target.checked })}
              className={styles.checkbox}
            />
            <span>Enable Renaming</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={!!options.enableStringEncryption}
              onChange={(e) => setOptions({ ...options, enableStringEncryption: e.target.checked })}
              className={styles.checkbox}
            />
            <span>String Encryption</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={!!options.enableNumberObfuscation}
              onChange={(e) => setOptions({ ...options, enableNumberObfuscation: e.target.checked })}
              className={styles.checkbox}
            />
            <span>Number Obfuscation</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={!!options.enableControlFlowFlattening}
              onChange={(e) => setOptions({ ...options, enableControlFlowFlattening: e.target.checked })}
              className={styles.checkbox}
            />
            <span>Control Flow Flattening</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={!!options.enableDeadCodeInjection}
              onChange={(e) => setOptions({ ...options, enableDeadCodeInjection: e.target.checked })}
              className={styles.checkbox}
            />
            <span>Dead Code Injection</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={!!options.enableSplitStrings}
              onChange={(e) => setOptions({ ...options, enableSplitStrings: e.target.checked })}
              className={styles.checkbox}
            />
            <span>Split Strings</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={!!options.enableDebugProtection}
              onChange={(e) => setOptions({ ...options, enableDebugProtection: e.target.checked })}
              className={styles.checkbox}
            />
            <span>Debug Protection</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={!!options.enableSelfDefending}
              onChange={(e) => setOptions({ ...options, enableSelfDefending: e.target.checked })}
              className={styles.checkbox}
            />
            <span>Self Defending</span>
          </label>
        </div>
      </div>
    </main>
  );
}
