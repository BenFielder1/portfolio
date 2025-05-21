"use client"
import ReactPlayer from 'react-player'

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Portable Bird Song Identifier</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="md:col-span-1">
                    <div className="relative w-full h-80">
                        <ReactPlayer 
                            url="https://www.youtube.com/watch?v=ykYUyg93UfQ"
                            controls={true}
                            id="video"
                            fill
                        />
                    </div>
                </div>

                <div className="md:col-span-1">
                    <h2 className="text-2xl font-semibold mb-4">Details</h2>
                    <p className="text-gray-700 mb-6">
                        A handheld device used to help you identfy birds from their song. The program is run on an Arduino Uno. 
                        Play the video to see an example (turn up the volume to hear the bird songs at the end).
                    </p>
                </div>
            </div>
        </div>
    );
}