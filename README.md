## 냄새측정기 User 관리 시스템
본 프로잭트는  냄새측정기 유저 관리용으로 만들어진 관리 시스템.
-  어드민시스템
-  2023.01.29 관리자 설정 페이지 완료
-  EcoView Admin 퍼블리싱 완료
-  2023.03.02 관리자 설정 > 관리자 정보수정 삭제버튼 추가 AdminSetting.js 105-108
-  2023.03.08
    1. Registration.js :
        - Node Sensor "+추가" 버튼 생성 : 126번줄
        - 설치주소 > "주소검색" 버튼 생성 및 모달창 : 12, 26, 42, 245, 248번줄
        - 장비등록 취소 버튼 추가 : 248번줄 
    2. RegistrationUser.js :
        - 삭제 버튼 추가 후 출력 삭제 수정 순 재배치 : 174번줄
        - 수정 클릭 시 모달창 * 수정 모달창안에 주소 찾기 모달창이 들어가야해서 모달 구조가 틀림* : 6~53, 모달창 안의 주소 검색 : 56-82, 95, 184, 188-398 번줄
    3. Management.js :
        - 설치주소 > "주소검색" 버튼 생성 및 모달창 : 12-30, 34-36, 106-128 번줄
    4. ManagementUser.js :
        - 출력,저장 버튼 > 출력,수정 버튼으로 변경
        - 수정하기 모달창 추가 * 수정 모달창안에 주소 찾기 모달창이 들어가야해서 모달 구조가 틀림* : 19-75, 87-94, 247-334 번줄
    5. ManagementUser.js :
        - 134번줄 추가 (grey mapPin 추가) 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# odor_Admin
