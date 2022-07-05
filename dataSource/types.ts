

export interface PackageManifest {
    name: string
    display: string
    addon?: boolean
    author?: string
    description?: string
    external?: string[]
    globals?: Record<string, string>
    manualImport?: boolean
    deprecated?: boolean
    submodules?: boolean
    build?: boolean
    iife?: boolean
    cjs?: boolean
    mjs?: boolean
    dts?: boolean
    target?: string
    utils?: boolean
    copy?: string[]
}
export interface VueTfn {
    name: string,  //名字
    package: string, // 归属包
    docs?: string,  // 文档地址
    category?: any, // 类别
    description?: string // 描述
}


export interface VueTPackage extends PackageManifest{
    dir: string,
    docs?: string
}

export interface VueTFunction {
    name: string
    package: string
    category?: string
    description?: string
    docs?: string
}

export interface PackageIndexes {
    packages: Record<string, VueTPackage>
    categories: string[]
    functions: VueTFunction[]
}
