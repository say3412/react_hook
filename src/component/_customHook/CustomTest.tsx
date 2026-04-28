import useToggle from "../../hook/useToggle";

export default function CustomTest() {
    const {value, toggle} = useToggle();

    return (
        <div>
            <p>{value ? "ON" : "OFF"}</p>
            <button onClick={toggle}>toggle</button>
        </div>
    )
}