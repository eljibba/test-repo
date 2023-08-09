let testStr: 'test' = 'test';

type actionType = 'up' | 'down';

function performAction(action: actionType | ComplexAction) {
    switch (action) {
        case 'up':
            return 1;
        case 'down':
            return -1;
    }
}

interface ComplexAction {
    s: string;
}