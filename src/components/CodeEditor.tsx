"use client";

import React from "react";
import Editor, { loader } from "@monaco-editor/react";

loader.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.46.0/min/vs" } });

interface CodeEditorProps {
    value: string;
    onChange?: (value: string | undefined) => void;
    readOnly?: boolean;
    language?: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, readOnly = false, language = "java" }) => {
    return (
        <div style={{ height: "100%", width: "100%", border: "1px solid #ccc", overflow: "hidden" }}>
            <Editor
                height="100%"
                width="100%"
                defaultLanguage={language}
                language={language}
                value={value}
                onChange={onChange}
                options={{
                    minimap: { enabled: false },
                    readOnly: readOnly,
                    scrollBeyondLastLine: false,
                    fontSize: 14,
                    automaticLayout: true,
                }}
            />
        </div>
    );
};
