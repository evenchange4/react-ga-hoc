import createHelper from 'recompose/createHelper';
import { componentDidMount } from 'react-lifecycle-hoc';
import ga from 'react-ga';

const ERROR_MESSAGE = 'Please Setup the GA SDK: https://github.com/react-ga/react-ga';

const pageview = path => BaseComponent =>
  componentDidMount(
    () => {
      if (!window.ga) throw new Error(ERROR_MESSAGE);

      ga.pageview(path || window.location.pathname + window.location.search);
    },
  )(BaseComponent);

export default createHelper(pageview, 'pageview');
