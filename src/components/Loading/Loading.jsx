import { ThreeDots } from 'react-loader-spinner';

const Loading = () => {
  return (
    <ThreeDots
      height="100"
      width="100"
      radius="11"
      color= '#ff0000'
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: 'absolute',
        bottom: '47%',
        left: '47%',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loading;
