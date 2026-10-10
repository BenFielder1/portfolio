"use client";

import { Download } from "@/components/Icons";

export default function PrintButton() {
    return (
        <button type="button" onClick={() => window.print()} className="btn btn-primary">
            <Download width={16} height={16} />
            Download as PDF
        </button>
    );
}
