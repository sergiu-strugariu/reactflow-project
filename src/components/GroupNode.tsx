import { memo } from 'react';

const GroupNode = memo(() => {
    return (
        <div className="border border-gray-200 rounded-lg w-96 h-48 flex flex-col">
            <div className="py-1 px-2 bg-gray-100">Group Node</div>
            <div className="flex-1 px-4 py-2 overflow-auto">
                <slot />
            </div>
        </div>
    );
});

export default GroupNode;
