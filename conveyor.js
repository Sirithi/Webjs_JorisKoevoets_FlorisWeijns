class Conveyor {
    generatePackage() {
        let packageTypes = Object.keys(Package);
        let randomType = packageTypes[Math.floor(Math.random() * packageTypes.length)]
        let package = Package.randomType

        package.rotation = Math.floor(Math.random() * 4);

        return package;
    }
}