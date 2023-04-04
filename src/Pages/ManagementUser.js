import React from "react";
import '../Css/Header.css';
import '../Css/Body.css';

import Button from '@mui/material/Button';


/* Pagination */
import Pagination from '@mui/material/Pagination';

/* Checkbox */
import Checkbox from '@mui/material/Checkbox';

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
                    <h1>장비관리</h1>
                    <Button style={{backgroundColor: '#DADADA' , borderRadius:'8px' , padding: '0px 32px', border: 'none' , color:'white' , marginLeft: '32px' , fontSize: '16px'}} 
                            variant="outlined" href="/Management">
                            신규등록
                    </Button>
                    <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '0px 32px', border: 'none' , color:'white' , marginLeft: '16px' , fontSize: '16px'}} 
                            variant="outlined" href="/ManagementUser">
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
                            <h3>장비 및 사용자 설정 관리</h3> <span>Manage equipment and user settings</span>
                        </div>
                        <div className="ManagementBody">
                            <div className="ManagementGuide">
                                <div className="ManagementGuideIcon">
                                    <FontAwesomeIcon icon={faLocationDot} style={{ color: '#75C03A' , fontSize: '26px' }} /> <span>온라인-정상동작</span>
                                    <FontAwesomeIcon icon={faLocationDot} style={{ color: '#DB2F18' , fontSize: '26px' }} /> <span>오프라인-점검필요</span>
                                    <FontAwesomeIcon icon={faLocationDot} style={{ color: '#F29729' , fontSize: '26px' }} /> <span>데이터 에러-통신오류</span>
                                    <FontAwesomeIcon icon={faLocationDot} style={{ color: '#BABABA' , fontSize: '26px' }} /> <span>대기상태</span>                                      
                                </div>
                                <div>
                                    <input className="textInput8" type="text" placeholder="상호/ 장비 번호/ 아이디로 검색 " />
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#130C0E' , fontSize: '26px' }} />
                                </div>
                            </div>
                            <div className="ManagementMap">
                                <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik" 
                                    frameborder="0"
                                    id="inlineFrameExample"
                                    title="Inline Frame Example"
                                    />
                            </div>

                            {/* 2023.04.04 추가 start */}
                            <div>
                                <div className="textInputListFull">
                                    <span className="ListTitle">상호</span>                    
                                    <input className="textInput7" type="text" placeholder="상호를 입력하세요" />
                                </div>
                                <div className="textInputListFull">
                                    <span className="ListTitle">아이디</span>                      
                                    <input className="textInput7" type="text" placeholder="아이드를 입력하세요" />
                                </div>
                                <div className="textInputListFull">
                                    <span className="ListTitle">담당자</span>                      
                                    <input className="textInput7" type="text" placeholder="담당자를 입력하세요" />
                                </div>
                                <div className="textInputListFull">
                                    <span className="ListTitle">설치주소</span>                      
                                    <input className="textInput7" type="text" placeholder="설치주소를 입력하세요" />
                                    <ChildModal />
                                </div>
                                <div className="textInputListFull">
                                    <span className="ListTitle">전화번호</span>                      
                                    <input className="textInput7" type="text" placeholder="전화번호를 입력하세요" />
                                </div>
                                <div className="textInputListFull">
                                    <span className="ListTitle">휴대폰 1</span>                      
                                    <input className="textInput7" type="text" placeholder="휴대폰번호를 입력하세요" />
                                </div>
                                <div>
                                    <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '8px 80px' , margin: '32px 0 64px 32px' , border: 'none' , color:'white' , fontSize: '16px'}} 
                                            variant="outlined">
                                            저 장
                                    </Button>
                                    <Button style={{backgroundColor: '#DADADA' , borderRadius:'8px' , padding: '8px 80px' , margin: '32px 0 64px 16px' , border: 'none' , color:'white' , fontSize: '16px'}} 
                                                                variant="outlined">
                                        취 소
                                    </Button>
                                </div>
                            </div>
                            {/* 2023.04.04 추가 end */}
                            <div className="ManagementUserBody">
                                <div className="ManagementTable">
                                    <ul className="ManagementTableTh">
                                        <li>선택</li>
                                        <li>장비 Part No.</li>
                                        <li>등록일</li>
                                        <li>장비상태</li>
                                        <li>센서 교환시기</li>
                                        <li>센서 교환횟수</li>
                                        <li>무상 A/S만료일</li>
                                        <li>전원</li>
                                    </ul>
                                    <ul className="ManagementTableTd">
                                        <li>
                                            <Checkbox
                                                {...label}
                                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                            />
                                        </li>
                                        <li>MOS-KR00001</li>
                                        <li>2022/09/13</li>
                                        <li className="textOnline">온라인</li>
                                        <li className="textChange">
                                            <p>암모니아 : 2024/09/13</p>
                                            <p>황화수소 :  2024/09/13</p>
                                            <p>온습도 : 2024/09/13</p>
                                        </li>
                                        <li className="textChange2">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>1</p>
                                        </li>
                                        <li>2022/09/13</li>
                                        <li>
                                            <Button style={{backgroundColor: '#130F10' , borderRadius:'8px' , padding: '6px 24px', marginRight: '8px' , border: 'none' , color:'white'}} 
                                                variant="outlined">
                                                ON
                                            </Button>
                                        </li>
                                    </ul>

                                    <ul className="ManagementTableTd">
                                        <li>
                                            <Checkbox
                                                {...label}
                                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                            />
                                        </li>
                                        <li>MOS-KR00002</li>
                                        <li>2022/09/13</li>
                                        <li className="textOffline">오프라인</li>
                                        <li className="textChange">
                                            <p>암모니아 : 2024/09/13</p>
                                            <p>황화수소 :  2024/09/13</p>
                                            <p>온습도 : 2024/09/13</p>
                                        </li>
                                        <li className="textChange2">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>1</p>
                                        </li>
                                        <li>2022/09/13</li>
                                        <li>
                                            <Button style={{backgroundColor: '#D5D5D5' , borderRadius:'8px' , padding: '6px 24px', marginRight: '8px' , border: 'none' , color:'white'}} 
                                                variant="outlined">
                                                OFF
                                            </Button>
                                        </li>
                                    </ul>

                                    <ul className="ManagementTableTd">
                                        <li>
                                            <Checkbox
                                                {...label}
                                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                            />
                                        </li>
                                        <li>MOS-KR00003</li>
                                        <li>2022/09/13</li>
                                        <li className="textError">오류</li>
                                        <li className="textChange">
                                            <p>암모니아 : 2024/09/13</p>
                                            <p>황화수소 :  2024/09/13</p>
                                            <p>온습도 : 2024/09/13</p>
                                        </li>
                                        <li className="textChange2">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>1</p>
                                        </li>
                                        <li>2022/09/13</li>
                                        <li>
                                            <Button style={{backgroundColor: '#130F10' , borderRadius:'8px' , padding: '6px 24px', marginRight: '8px' , border: 'none' , color:'white'}} 
                                                variant="outlined">
                                                ON
                                            </Button>
                                        </li>
                                    </ul>

                                </div>
                                <div className="ManagementBtn">
                                    <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '6px 32px', marginRight: '8px' , border: 'none' , color:'white'}} 
                                            variant="outlined">
                                            출 력
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
                                            장비 및 사용자 수정
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            <div className="ManagementBody">
                                                <div className="ManagementGuide">
                                                    <div className="ManagementGuideIcon">
                                                        <FontAwesomeIcon icon={faLocationDot} style={{ color: '#75C03A' , fontSize: '26px' }} /> <span>온라인-정상동작</span>
                                                        <FontAwesomeIcon icon={faLocationDot} style={{ color: '#DB2F18' , fontSize: '26px' }} /> <span>오프라인-점검필요</span>
                                                        <FontAwesomeIcon icon={faLocationDot} style={{ color: '#F29729' , fontSize: '26px' }} /> <span>데이터 에러-통신오류</span>
                                                    </div>
                                                    <div>
                                                        <input className="textInput8" type="text" placeholder="상호/ 장비 번호/ 아이디로 검색 " />
                                                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#130C0E' , fontSize: '26px' }} />
                                                    </div>
                                                </div>
                                                <div className="ManagementMap">
                                                    <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik" 
                                                            frameborder="0"
                                                            id="inlineFrameExample"
                                                            title="Inline Frame Example"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="textInputListFull">
                                                        <span className="ListTitle">상호</span>                      
                                                        <input className="textInput7" type="text" placeholder="상호를 입력하세요" />
                                                    </div>
                                                    <div className="textInputListFull">
                                                        <span className="ListTitle">아이디</span>                      
                                                        <input className="textInput7" type="text" placeholder="아이드를 입력하세요" />
                                                    </div>
                                                    <div className="textInputListFull">
                                                        <span className="ListTitle">담당자</span>                      
                                                        <input className="textInput7" type="text" placeholder="담당자를 입력하세요" />
                                                    </div>
                                                    <div className="textInputListFull">
                                                        <span className="ListTitle">설치주소</span>                      
                                                        <input className="textInput7" type="text" placeholder="설치주소를 입력하세요" />
                                                        <ChildModal />
                                                    </div>
                                                    <div className="textInputListFull">
                                                        <span className="ListTitle">전화번호</span>                      
                                                        <input className="textInput7" type="text" placeholder="전화번호를 입력하세요" />
                                                    </div>
                                                    <div className="textInputListFull">
                                                        <span className="ListTitle">휴대폰 1</span>                      
                                                        <input className="textInput7" type="text" placeholder="휴대폰번호를 입력하세요" />
                                                    </div>
                                                    <div>
                                                        <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '8px 80px' , margin: '32px 0 64px 32px' , border: 'none' , color:'white' , fontSize: '16px'}} 
                                                                variant="outlined">
                                                                저 장
                                                        </Button>
                                                        <Button style={{backgroundColor: '#DADADA' , borderRadius:'8px' , padding: '8px 80px' , margin: '32px 0 64px 16px' , border: 'none' , color:'white' , fontSize: '16px'}} 
                                                                variant="outlined"
                                                                onClick={handleClose}
                                                                >
                                                            취 소
                                                        </Button>
                                                    </div>
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
        </div>
    )
}