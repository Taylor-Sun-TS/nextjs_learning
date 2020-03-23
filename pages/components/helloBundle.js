import dynamic from 'next/dynamic';

const HelloBundle = dynamic({
    modules: () => {
        const components = {
            Hello1: import('./hello'),
            Hello2: import('./hello')
        }

        return components
    },
    render: (props, { Hello1, Hello2 }) =>(
        <div>
            <h1>
                {props.title}
            </h1>
            <Hello1 name={JSON.stringify(props)} />
            <Hello1 name={props.name1} />
            <Hello2 name={props.name2} />
        </div>
    )
});

export default ({hello1, hello2}) => <HelloBundle title="Dynamic Bundle" name1={hello1} name2={hello2} />
