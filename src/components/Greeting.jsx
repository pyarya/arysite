import { useState } from "preact/hooks";

export default function Greeting({messages}) {

    const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
            <button style="font-size:20px;"class="hi" onClick={() => setGreeting(randomMessage())}>
                {greeting}! I'm
            </button>
        </div>
  );
}