export default class GunUtils {
    
    static mapNameToImgPath(name:string): string {
        const regexForAllSpaces = / /g;
        return name.replace(regexForAllSpaces, "_");
    }
}