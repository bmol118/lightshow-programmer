import { createRoot } from 'react-dom/client';
import { Dragable } from './components/Dragable';

const root = createRoot(document.body);
root.render(
<h2>
    <Dragable></Dragable>
</h2>
);