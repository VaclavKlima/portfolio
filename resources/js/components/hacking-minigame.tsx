import Card from '@/components/card';

export default function HackingMinigame() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Card title={'sdsdsd'} borderColor="bg-yellow-300">

                <div className="text-white text-center">
                    <h1 className="text-2xl font-bold mb-4">Hacking Minigame</h1>
                    <p className="mb-2">Use the arrow keys to navigate through the maze.</p>
                    <p className="mb-2">Avoid the red walls and reach the green goal!</p>
                    <p className="text-sm">Good luck, hacker!</p>
                </div>
            </Card>
        </div>
    );
}
