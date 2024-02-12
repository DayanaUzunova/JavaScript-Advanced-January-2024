function solve(input) {
    const state = {};

    function create(name, inherit, parentName) {
        const obj = Object.create(inherit ? state[parentName] : null);
        state[name] = obj;
    }

    function set(name, propName, value) {
        state[name][propName] = value;
    }

    function print(name) {
        const obj = state[name];
        const props = getAllProperties(obj);
        console.log(props.map(e => `${e[0]}:${e[1]}`).join(','));
    }

    function getAllProperties(obj) {
        let props = [];
        for (let currentObj = obj; currentObj !== null; currentObj = Object.getPrototypeOf(currentObj)) {
            props = props.concat(Object.entries(currentObj));
        }
        return props;
    }

    input.forEach(element => {
        let [command, ...tokens] = element.split(' ');
        switch (command) {
            case 'create':
                create(...tokens);
                break;
            case 'set':
                set(...tokens);
                break;
            case 'print':
                print(...tokens);
                break;
        }
    });
}