function ToggleImages({ active, handleChangeActive }) {
    return (
        <>
            <div className="toggle-wrapper">
                {active ? (
                    <img
                        className="active"
                        src={"images/page-selected.png"}
                        alt=""
                        onClick={() => handleChangeActive()}
                    />
                ) : (
                    <img
                        className="inactive"
                        src={"images/page-not-selected.png"}
                        alt=""
                        onClick={() => handleChangeActive()}
                    />
                )}
            </div>
        </>
    );
}

export default ToggleImages;