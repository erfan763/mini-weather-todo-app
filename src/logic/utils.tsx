/**
 * @description
 * Takes a values object, and an initialValues object,
 * and returns a new object includes modifiedValues.
 *
 * @param values object.
 * @param initialValues object, indicates base object to compare with values.
 *
 * @returns Difference of values and initialValues
 */
export const getModifiedValues = (values: any, initialValues: any) => {
  let modifiedValues: any = {};

  if (values) {
    Object.entries(values).forEach((entry) => {
      let key = entry[0];
      let value = entry[1];

      if (value !== initialValues[key]) {
        modifiedValues[key as any] = value;
      }
    });
  }

  return Object.keys(modifiedValues).length === 0 ? null : modifiedValues;
};
