const setInputValue = (name, value, setState) => {
  setState((prev) => ({
    ...prev,
    [name]: value
  }));
};

export default setInputValue;
