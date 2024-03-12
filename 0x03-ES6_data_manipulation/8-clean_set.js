function cleanSet(set, startString) {
  // Filter the set to only include values starting with startString
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));

  // Remove startString from filtered values and join them into a string separated by '-'
  const cleanedValues = filteredValues.map((value) => value.substring(startString.length));
  return cleanedValues.join('-');
}

export default cleanSet;
