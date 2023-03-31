import React from "react";
import '../Css/Header.css';
import '../Css/Body.css';

import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

/* Pagination */
import Pagination from '@mui/material/Pagination';

/* Checkbox */
import Checkbox from '@mui/material/Checkbox';

/* Radio Group */
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

/* 폰트어썸 import */
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Modal import
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

// Modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1080,
    bgcolor: 'background.paper',
    borderRadius: '16px',
    border: 'none',
    boxShadow: 14,
    p: 4,
  };

function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Button style={{backgroundColor: '#F5F6FF' , borderRadius:'8px' , padding: '12px 32px', border: 'none' , color:'#120C0E'}} 
                variant="outlined"
                onClick={handleOpen}>
            주소검색
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
        <Box sx={{ ...style, width: 600 }}>
            <Typography className="modalCloseIcon">
                <CloseIcon onClick={handleClose}/>
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                주소
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                주소 레이아웃 영역
            </Typography>
        </Box>
        </Modal>
      </React.Fragment>
    );
  }  


export default function Management(){

    const [PartNo, setList] = React.useState('');

    const handleChange = (event) => {
        setList(event.target.value);
    };
    
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    // Modal const
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="container">
            <div className="header-wrap">
                <div className="headerBtn">
                    <h1>장비등록</h1>
                    <Button style={{backgroundColor: '#DADADA' , borderRadius:'8px' , padding: '0px 32px', border: 'none' , color:'white' , marginLeft: '32px' , fontSize: '16px'}} 
                            variant="outlined" href="/Registration">
                            신규등록
                    </Button>
                    <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '0px 32px', border: 'none' , color:'white' , marginLeft: '16px' , fontSize: '16px'}} 
                            variant="outlined" href="/RegistrationUser">
                            사용자관리
                    </Button>
                </div>
                <div className="info-wrap">
                    <div className="info-id">
                        <span>User Name</span>
                        <button className="logout-btn">로그아웃</button>
                    </div>
                    <div className="info-email">
                        Username@email.com
                    </div>
                </div>
            </div>

            <div className="bodyManagement">
                <div className="ManagementGrop1">
                    <div className="ManagementLayout">

                        <div className="setting-layout-header">
                            <h3>등록 리스트 및 관리</h3> <span>Registration list and management</span>
                        </div>
                        <div className="ManagementUserBody">
                            <div className="RegistrationSerch">
                                <input className="textInput8" type="text" placeholder="상호/ 장비 번호/ 아이디로 검색 " />
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#130C0E' , fontSize: '26px' }} />
                            </div>
                            <div className="RegistrationUserTable">
                                <ul className="ManagementTableTh">
                                    <li>선택</li>
                                    <li>장비 Part No.</li>
                                    <li>등록일</li>
                                    <li>상호</li>
                                    <li>아이디</li>
                                    {/* <li>비밀번호</li> */}
                                    <li>전화번호</li>
                                    <li className="tbAddress">주소</li>
                                    <li>담당자</li>
                                    <li>핸드폰 번호</li>
                                </ul>
                                <ul className="RegistrationUserTd">
                                    <li>
                                        <Checkbox
                                            {...label}
                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </li>
                                    <li>MOS-KR00001</li>
                                    <li>2022/09/13</li>
                                    <li>온라인</li>
                                    <li className="textID">sguns0802@gmail.com</li>
                                    {/* <li>abc123</li> */}
                                    <li>031-000-0000</li>
                                    <li className="tbAddress">경기도 시흥시 시흥대로 123번지 ...</li>
                                    <li>홍길동</li>
                                    <li>010-0000-0000</li>
                                </ul>
                            </div>
                            <div className="ManagementBtn">
                                <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '6px 32px', marginRight: '8px' , border: 'none' , color:'white'}} 
                                        variant="outlined">
                                        출 력
                                </Button>
                                <Button style={{backgroundColor: 'white' , borderRadius:'8px' , padding: '6px 32px', marginRight: '8px' , color: 'red' , borderColor: 'red'}} 
                                        variant="outlined">
                                        삭 제
                                </Button>
                                <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '6px 32px', border: 'none' , color:'white'}} 
                                        variant="outlined"
                                        onClick={handleOpen}
                                        >
                                        수 정
                                </Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="parent-modal-title"
                                    aria-describedby="parent-modal-description"
                                >
                                    <Box sx={{ ...style, width: 1080 }}>
                                        <Typography className="modalCloseIcon">
                                            <CloseIcon onClick={handleClose}/>
                                        </Typography>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            등록 리스트 및 관리 수정
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            <div className="RegistrationBody">
                                                <div className="textInputListFull">
                                                    <span className="ListTitle">관리자 명</span>
                                                    <div className="sensorWrap">
                                                        <span className="sensor">
                                                        Main Sensor
                                                        </span>
                                                        <input className="textInput5" type="text" placeholder="MOS-KR00001" />
                                                        <Button style={{backgroundColor: '#F5F6FF' , borderRadius:'8px' , padding: '12px 32px', border: 'none' , color:'#120C0E'}} 
                                                                variant="outlined">
                                                                중복확인
                                                        </Button>
                                                        <Stack sx={{ width: '742px' }} spacing={2}>
                                                            <Alert variant="outlined" severity="error" style={{ padding: '2px 16px' , margin: '8px 0 0 16px'  }}>
                                                                동일한 장비번호 입니다. 한번 더 확인해주세요.
                                                            </Alert>
                                                            <Alert variant="outlined" severity="success" style={{ padding: '2px 16px' , margin: '8px 0 0 16px'  }}>
                                                                장비번호 중복확인 완료
                                                            </Alert>
                                                        </Stack>
                                                    </div>
                                                </div>

                                                <div className="textInputListFull">
                                                    <span className="ListTitle"></span>
                                                    <div className="sensorWrap">
                                                        <span className="sensor">
                                                        Node Sensor
                                                        </span>
                                                        <input className="textInput5" type="text" placeholder="MOS-KR00002" />
                                                    </div>
                                                </div>
                                                <div className="textInputListFull">
                                                    <span className="ListTitle"></span>
                                                    <div className="sensorWrap">
                                                        <span className="sensor">
                                                        Node Sensor
                                                        </span>
                                                        <input className="textInput5" type="text" placeholder="MOS-KR00003" />
                                                    </div>
                                                </div>
                                                <div className="textInputListFull">
                                                    <span className="ListTitle"></span>
                                                    <div className="sensorWrap">
                                                        <span className="sensor">
                                                        Node Sensor
                                                        </span>
                                                        <input className="textInput5" type="text" placeholder="MOS-KR00004" />
                                                        <Button style={{backgroundColor: '#F5F6FF' , borderRadius:'8px' , padding: '12px 39px', border: 'none' , color:'#120C0E'}} 
                                                                variant="outlined">
                                                                + 추가
                                                        </Button>
                                                    </div>
                                                </div>

                                                <div className="textInputListFull2">
                                                    <span className="ListTitle">측정 단위</span>
                                                    <div>
                                                        <div className="sensorWrap2">
                                                            <span className="subListText">
                                                            암모니아
                                                            </span>
                                                            <div className="Radio">
                                                                <FormControl>
                                                                    <RadioGroup
                                                                        row
                                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                                        name="row-radio-buttons-group"
                                                                    >
                                                                        <FormControlLabel value="ppm" control={<Radio />} label="ppm" />
                                                                        <FormControlLabel value="ppb" control={<Radio />} label="ppb" />
                                                                    </RadioGroup>
                                                                </FormControl>
                                                            </div>
                                                        </div>

                                                        <div className="sensorWrap2">
                                                            <span className="subListText">
                                                            황화수소
                                                            </span>
                                                            <div className="Radio">
                                                                <FormControl>
                                                                    <RadioGroup
                                                                        row
                                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                                        name="row-radio-buttons-group"
                                                                    >
                                                                        <FormControlLabel value="ppm" control={<Radio />} label="ppm" />
                                                                        <FormControlLabel value="ppb" control={<Radio />} label="ppb" />
                                                                    </RadioGroup>
                                                                </FormControl>
                                                            </div>
                                                        </div>

                                                        <div className="sensorWrap2">
                                                            <span className="subListText">
                                                            온도
                                                            </span>
                                                            <div className="Radio">
                                                                <FormControl>
                                                                    <RadioGroup
                                                                        row
                                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                                        name="row-radio-buttons-group"
                                                                    >
                                                                        <FormControlLabel value="ppm" control={<Radio />} label="ppm" />
                                                                        <FormControlLabel value="ppb" control={<Radio />} label="ppb" />
                                                                    </RadioGroup>
                                                                </FormControl>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>


                                                <div className="textInputListFull2">
                                                    <span className="ListTitle">센서 수명</span>
                                                    <div>
                                                        <div className="sensorWrap2">
                                                            <span className="subListText2">
                                                            암모니아
                                                            </span>
                                                            <input className="textInput6" type="text" placeholder="01" />
                                                            개월
                                                        </div>

                                                        <div className="sensorWrap2">
                                                            <span className="subListText2">
                                                            황화수소
                                                            </span>
                                                            <input className="textInput6" type="text" placeholder="01" />
                                                            개월
                                                        </div>

                                                        <div className="sensorWrap2">
                                                            <span className="subListText2">
                                                            온도
                                                            </span>
                                                            <input className="textInput6" type="text" placeholder="01" />
                                                            개월
                                                        </div>
                                                        
                                                    </div>
                                                </div>

                                                <div className="textInputListFull">
                                                    <span className="ListTitle">관리자 명</span>                      
                                                    <input className="textInput7" type="text" placeholder="관리자명을 입력하세요" />
                                                </div>
                                                <div className="textInputListFull">
                                                    <span className="ListTitle">비밀번호</span>                      
                                                    <input className="textInput7" type="password" placeholder="비밀번호를 입력하세요" />
                                                </div>
                                                <div className="textInputListFull">
                                                    <span className="ListTitle">비밀번호 확인</span>                      
                                                    <input className="textInput7" type="password" placeholder="비밀번호를 한번 더 입력하세요" />
                                                </div>
                                                <div className="textInputListFull">
                                                    <span className="ListTitle">전화번호</span>                      
                                                    <input className="textInput7" type="text" placeholder="전화번호를 입력하세요" />
                                                </div>
                                                <div className="textInputListFull">
                                                    <span className="ListTitle">설치주소</span>                      
                                                    <input className="textInput7" type="text" placeholder="주소를 입력하세요" />
                                                    <ChildModal />
                                                </div>
                                                <div className="textInputListFull">
                                                    <span className="ListTitle">담당자</span>                      
                                                    <input className="textInput7" type="text" placeholder="담당자 이름" />
                                                </div>
                                                <div className="textInputListFull">
                                                    <span className="ListTitle">휴대폰 1</span>                      
                                                    <input className="textInput7" type="text" placeholder="주소를 입력하세요" />
                                                </div>
                                                <div className="textInputListFull">
                                                    <span className="ListTitle">휴대폰 2</span>                      
                                                    <input className="textInput7" type="text" placeholder="주소를 입력하세요" />
                                                </div>
                                                <div>
                                                    <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '8px 80px' , margin: '32px 0 64px 32px' , border: 'none' , color:'white' , fontSize: '16px'}} 
                                                            variant="outlined">
                                                            장비수정
                                                    </Button>
                                                    <Button style={{backgroundColor: '#DADADA' , borderRadius:'8px' , padding: '8px 80px' , margin: '32px 0 64px 16px' , border: 'none' , color:'white' , fontSize: '16px'}} 
                                                            variant="outlined"
                                                            onClick={handleClose}
                                                            >
                                                            취 소
                                                    </Button>
                                                </div>

                                            </div>
                                        </Typography>                                 
                                    </Box>
                                </Modal>
                            </div>
                            <div className="pagination">
                                <Pagination count={10} shape="rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}