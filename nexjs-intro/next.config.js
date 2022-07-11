
//개발자도구 네트워크 탭에서 요청 url에 apikey가 그대로 드러나기 때문에 감춰야한다.
//(1) .env 파일 사용하기(환경변수) - 꼭 GITignore해주기!
const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() { //redirects는 바뀐 url을 그대로 보여줌. 
    return [
      {
        source: "/old-blog/:path*", //:path*부분은 뒤에 무엇이와도 매칭된다.
        destination: "/new-sexy-blog/:path*", //뒤의 path부분은 그대로 유지
        permanent: false,
      },
    ];
  },
  async rewrites() { //rewrites는 바뀐 url을 감춘다.
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
