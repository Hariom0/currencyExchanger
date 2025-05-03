 const customStyles = {
    control: (base) => ({
      ...base,
      padding: "0.01rem",
      borderRadius: "0.375rem",
      border: "1px solid #D1D5DB",
      fontWeight: "600",
      fontSize: "0.95rem",
      outline: "none",
      boxShadow: "none",
      backgroundColor:"transparent",
      color:"green"
    }),
    menu: (base) => ({
      ...base,
      zIndex: 50,
      color:"white"
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#374151" : "#1f2937",
      color: "white",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "white",
    }),
    input: (base) => ({
      ...base,
      color: "white"
    })
  };

  export default customStyles;