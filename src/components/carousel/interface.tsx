interface CarouselProps {
  /**
   * @description     自动播放
   * @default         false
   * @type            boolean
   */
  autoPlay?: boolean;

  /**
   * @description     展示预设指示器
   * @default         false
   * @type            boolean
   */
  dots?: boolean;

  /**
   * @description     展示预设箭头
   * @default         false
   * @type            boolean
   */
  arrows?: boolean;

  /**
   * @description     一屏展示多少项目
   * @default         1
   * @type            number
   */
  slidesToShow?: number;

  /**
   * @description     一次滚动多少个
   * @default         1
   * @type            number
   */
  slidesToScroll?: number;

  /**
   * @description     轮播结束时的回调
   * @default         null
   * @type            function
   */
  afterChange?: (current: number) => void;

  /**
   * @description     轮播开始前的回调
   * @default         null
   * @type            function
   */
  beforeChange?: (from: number, to: number) => void;

  /**
   * @description     ref => 用于手动控制前后, 实例暴露除了 next previous goTo 三个方法
   * @default         null
   * @type            any
   */
  ref?: any;
  children?: React.ReactNode;
}

export type { CarouselProps };
