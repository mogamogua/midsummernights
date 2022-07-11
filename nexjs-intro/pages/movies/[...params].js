import { useRouter } from "next/router";
import Seo from "../../components/Seo";

//dynamic routing으로 [id].js였던 파일명을 [...params]로 변경
//-> catch All url가능 .url에 입력된 모든 것들을 catch해와서 사용가능.
export default function Detail({params}) {
  const router = useRouter();
  //console.log(router) 
  // query안 params에 url에 입력된 title, id가 배열에 저장됨.
  //url을 localhost:3000/movies/spiderMan/1231을 입력하였다면,
  //params: ['spiderMan', '1231'] 형식으로 담긴다.
  // const [title, id] = router.query.params || []
  //server에선 아직 router.query.params는 아무것도 없다. 그래서 에러가 발생.
  //예외처리로 빈배열넣어준다.
  //하지만 이렇게 client-side에서 url을 받아온 후 화면을 그린다면 크롤러들은 디테일 페이지에서 아무 정보를 얻지 못한다.
  //-> Server-side에서 미리 url정보를 가져오자.

  const [title, id] = params;
  return (
    <div>
      <Seo title={title} />
      <h4>{title || "loading. . . "}</h4>
    </div>
  );
}

export function getServerSideProps({query: {params}}) { 
  //Next.js는 Server-side context를 제공해준다.(엄청나게 많은 정보들이 들어있다.)
  //이중 query 객체의 params는 [title, id]를 담고 있다. 이를 사용하면된다.
  // console.log(ctx);
  return {
    props: {
      params,
    }
  }
}