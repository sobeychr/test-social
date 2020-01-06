export const appendObject = (array, searchKey, searchValue, append) =>
    array.map(entry => {
        if (entry[searchKey] && entry[searchKey] === searchValue) {
            return {
                ...entry,
                ...append,
            };
        }
        return entry;
    });
