import {
  getStyle,
} from '@/utils/mUtils';

export const loadMore = {
  directives: {
    'load-more': {
      bind: (el, binding) => {
        const windowHeight = window.screen.height;
        let height;
        let setTop;
        let paddingBottom;
        let marginBottom;
        let requestFram;
        let oldScrollTop;
        let scrollEl;
        let heightEl;
        const scrollType = el.attributes.type && el.attributes.type.value;
        const scrollReduce = 2;

        const execLoadMore = () => {
          if ((scrollEl.scrollTop + windowHeight + scrollReduce) >=
              (height + setTop + paddingBottom + marginBottom)) {
            binding.value();
          }
        };

        const moveEnd = () => {
          requestFram = requestAnimationFrame(() => {
            if (scrollEl.scrollTop !== oldScrollTop) {
              oldScrollTop = scrollEl.scrollTop;
              moveEnd();
            } else {
              cancelAnimationFrame(requestFram);
              height = heightEl.clientHeight;
              execLoadMore();
            }
          });
        };

        if (scrollType === '2') {
          scrollEl = el;
          heightEl = el.children[0];
        } else {
          scrollEl = document.body;
          heightEl = el;
        }

        el.addEventListener('touchstart', () => {
          height = heightEl.clientHeight;
          if (scrollType === '2') {
            // height = height;
          }
          setTop = el.offsetTop;
          paddingBottom = getStyle(el, 'paddingBottom');
          marginBottom = getStyle(el, 'marginBottom');
        }, false);

        el.addEventListener('touchmove', () => {
          execLoadMore();
        }, false);

        el.addEventListener('touchend', () => {
          oldScrollTop = scrollEl.scrollTop;
          moveEnd();
        }, false);
      },
    },
  },
};

export const getImgPath = {
  methods: {
    // 传递过来的图片地址需要处理后才能正常使用
    getImgPath(path) {
      let suffix;
      if (!path) {
        return 'http://test.fe.ptdev.cn/elm/elmlogo.jpeg';
      }
      if (path.indexOf('jpeg') !== -1) {
        suffix = '.jpeg';
      } else {
        suffix = '.png';
      }
      const url = `https://fuss10.elemecdn.com/${path.substr(0, 1)}/${path.substr(1, 2)}/${path.substr(3)}${suffix}`;

      return url;
    },
  },
};
