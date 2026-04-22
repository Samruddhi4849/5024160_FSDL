function Rules({ hasLength, hasNumber, hasSymbol }) {
    return (
        <div className="rules">
            <p className={hasLength ? "valid" : "invalid"}>
                {hasLength ? "✔" : "✘"} 8 characters
            </p>
            <p className={hasNumber ? "valid" : "invalid"}>
                {hasNumber ? "✔" : "✘"} Number
            </p>
            <p className={hasSymbol ? "valid" : "invalid"}>
                {hasSymbol ? "✔" : "✘"} Symbol
            </p>
        </div>
    );
}
