import dynamic from 'next/dynamic';

// deprecated feature
// const HelloBundle = dynamic({
//     modules: () => {
//         const components = {
//             Hello1: import('./hello'),
//             Hello2: import('./hello')
//         }

//         return components
//     },
//     render: (props, { Hello1, Hello2 }) =>(
//         <div>
//             <h1>
//                 {props.title}
//             </h1>
//             <Hello1 name={JSON.stringify(props)} />
//             <Hello1 name={props.name1} />
//             <Hello2 name={props.name2} />
//         </div>
//     )
// });

const Hello1 = dynamic(() => import('./hello'))
const Hello2 = dynamic(() => import('./hello'))

function HelloBundle(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <Hello1 name={JSON.stringify(props)} />
      <Hello1 name={props.name1} />
      <Hello2 name={props.name2} />
    </div>
  )
}

function DynamicBundle({hello1, hello2}) {
  return <HelloBundle title="Dynamic Bundle" name1={hello1} name2={hello2} />
}

export default DynamicBundle;
