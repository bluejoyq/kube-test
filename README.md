# 쿠버네티스를 이용한 통신 테스트
## 도커 이미지
이 레포지토리는 `consumer` 이미지 (Next JS 기반 SSR 웹)와 `producer` 이미지 (Nest JS 기반 서버)를 각각 `deployment`로 만듭니다.

레지스트리 없이 로컬 도커의 이미지를 사용하도록 만들었습니다.

## 통신
`ClusterIP`를 통해 프론트엔드에서 백엔드로 접근할 수 있는 서비스를 만들어주고, `NodePort`를 통해 외부에서 프론트엔드로 접근할 수 있도록 합니다.
## 추가로
CSR 환경(브라우저)은 쿠버네티스 외부이기에 일반적으로는 내부 서비스에 접근할 수 없습니다. 그러므로 이 예제에서는 SSR 환경에서 주입된 env를 통해 요청 후 페이지를 렌더링하도록 SSR를 사용했습니다.

피지컬 머신이 하나인 환경을 가정했습니다. 그러므로 NodePort를 사용합니다.

# 시작하기
`minikube` 환경입니다.


## 도커 이미지 빌드
우선 `docker desktop`를 실행시켜줍니다. 이후 `minikube start`도 잊지마세요~
```bash
eval $(minikube docker-env) # minikube 내부의 docker로 덮어씌웁니다.
# 주의 위 명령어는 이 세션에서만 적용되므로 다른 탭이나 창에서 터미널을 띄운 뒤 실행하면 도커 데스크탑의 도커로 실행이 됩니다!
cd consumer
docker build . -t consumer-image:0.0.2 # 프론트 이미지 빌드
cd ../producer
docker build . -t producer-image:0.0.2 # 백엔드 이미지 빌드
docker image ls # 빌드된 이미지 확인
```
## 쿠버네티스 실행
```bash
# root
kubectl apply -f pc-deployment.yaml
minikube service pc-nodeport --url
```

이후 나온 경로로 들어가서 웹페이지가 나오면 성공~
로딩이 5초 걸리는게 맞으니까 당황하지 마세요!