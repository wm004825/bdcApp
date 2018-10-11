
/**
 * 请求部门详情的参数
 */
export interface iInfoEntity {
    Id: string
}

/**
  * 部门详情返回的参数
  */
export interface introsModeModule {

    Id: string;

    Name: string;

    Infos: introst[],
}

/**
  * 部门详情返回的参数
  */
export interface introst {

    Id: string;

    IntroductionId: string;

    Title: string;

    Content: string;

    Img: string;
}