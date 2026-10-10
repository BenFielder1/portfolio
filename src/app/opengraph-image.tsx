import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 72,
                    background: "#121210",
                    color: "#ebe8e0",
                    fontFamily: "Georgia, serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 22,
                        letterSpacing: 4,
                        textTransform: "uppercase",
                        color: "#76726a",
                        fontFamily: "monospace",
                    }}
                >
                    <span>{profile.role}</span>
                    <span>{profile.location}</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 148, lineHeight: 0.95, letterSpacing: -3 }}>
                        {profile.fullName.split(" ")[0]}
                    </div>
                    <div
                        style={{
                            fontSize: 148,
                            lineHeight: 0.95,
                            letterSpacing: -3,
                            fontStyle: "italic",
                            color: "#a9a59b",
                        }}
                    >
                        {profile.fullName.split(" ")[1]}
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 26,
                        color: "#a9a59b",
                    }}
                >
                    <span>{profile.disciplines.join("  ·  ")}</span>
                    <span style={{ color: "#e9916f" }}>benfielder.com</span>
                </div>
            </div>
        ),
        { ...size }
    );
}
