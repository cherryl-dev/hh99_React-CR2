<div align='center'>
    <img src="https://capsule-render.vercel.app/api?type=soft&color=auto&text=React%20hh99%20week2%20Task&fontSize=40&animation=twinkling" />
</div>

## components

- `Button`
    - `Button.js` : 사이트 전체적으로 사용하고 있는 재사용용 버튼
    - `Icon.js` : 사이트 전체적으로 사용하고 있는 아이콘 틀
    - `ButtonContainer.js` : `ButtonGroup`에 사용 되는 버튼을 감싸는 용도의 컨테이너
    - `ButtonGroup.jsx` : 가장 상단의 Button들을 모아둔 그룹

- `Input`
    - `InputGroup.jsx` : input을 보여주기 위한 코드 (input바와 alert창 모두 해당 코드에 존재함)

- `Modal`
    - `ModalStyled.js` : `ModalGroup`에서 사용하는 css 코드 그룹
    - `ModalGroup.jsx` : Modal들을 모아둔 그룹 (Modal1, Modal2로 분리되어 있음)


- `Select`
    - `SelectStyled.js` : `SelectGroup`에서 사용하는 css 코드 그룹
    - `SelectGroup.jsx` : Select바를 보여주기 위한 코드


## src

- `fonts`
    - `Dovemayo_gothic` (둘기마요) 폰트 사용 (포함)

- `images`
    - 아이콘 전부 이미지 다운로드 후 사용
    - `icon1, icon2` : ButtonGroup에서 사용
    - `icon3` : SelectGroup에서 사용

- `App.jsx`
    - `components` 폴더의 각 항목별 Group들을 받아 보여주는 용도로 사용 (Title은 해당 코드에 포함)