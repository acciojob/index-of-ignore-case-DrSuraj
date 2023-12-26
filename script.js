function indexOfIgnoreCase(str: string, subStr: string): number {
    // Convert both strings to lowercase for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Find the index of the first occurrence of subStr in lowerStr
    const index = lowerStr.indexOf(lowerSubStr);

    return index;
}

// Examples
console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // Output: 2
console.log(indexOfIgnoreCase("test", "aaa"));          // Output: -1
