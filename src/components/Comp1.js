const amount = "Patil--    ";
const value = ()=>
{
    return `Printed By  Lingouda ${amount}`;
}
const Comp = (props) =>
{
    return  (
    <p>this is example and practice component: {props.name},
   Total {amount}
   this message {value()}</p>
    );

}
export default Comp;