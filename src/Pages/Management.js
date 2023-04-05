import React from "react";
import '../Css/Header.css';
import '../Css/Body.css';
import CloseBtn from "../Components/Img/close_btn.svg";
import Button from '@mui/material/Button';

/* 폰트어썸 import */
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// Modal import
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

// Modal const
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: '16px',
    border: 'none',
    boxShadow: 14,
    p: 4,
  };

export default function Management(){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

    return (
        <div className="container">
            <div className="header-wrap">
                <div className="headerBtn">
                    <h1>장비관리</h1>
                    <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '0px 32px', border: 'none' , color:'white' , marginLeft: '32px' , fontSize: '16px'}} 
                            variant="outlined" href="Management">
                            신규등록
                    </Button>
                    <Button style={{backgroundColor: '#DADADA' , borderRadius:'8px' , padding: '0px 32px', border: 'none' , color:'white' , marginLeft: '16px' , fontSize: '16px'}} 
                            variant="outlined" href="ManagementUser">
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
                                </div>
                                <div>
                                    <input className="textInput8" type="text" placeholder="상호/ 장비 번호/ 아이디로 검색 " />
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#130C0E' , fontSize: '26px' }} />
                                </div>
                            </div>

                            {/* Start 지도 마커 레이어팝업 */}
                            <div className="mapMarkerPopup">
                                <div className="mapMarkerPopupLayer">
                                    <div className="modalCloseIcon">
                                        <div className="modalCloseIconImg"></div>
                                    </div>
                                    <div>
                                        <h2>Lx010003</h2>
                                    </div>
                                    <div className="markerText">
                                        <FontAwesomeIcon icon={faLocationDot} style={{ color: '#75C03A' , fontSize: '14px' }} /> <span>온라인-정상동작</span>
                                    </div>
                                    <hr />
                                    <div className="PopuptextareaId">
                                        <div className="PopuptextareaIdTitle">Id : </div>
                                        <div>Lx010003</div>
                                    </div>
                                    <div className="PopuptextareaLocation">
                                        <div className="PopuptextareaIdTitle">Location : </div>
                                        <div className="PopuptextareaIdText">741 Naebaisan-dong, Gangseo=gu, Seoul, South Korea</div>
                                    </div>
                                    <div className="mapMarkerPopupBtn">
                                        <p>세부정보표시</p>
                                    </div>
                                </div>
                            </div>
                            {/* End 지도 마커 레이어팝업 */}

                            <div className="ManagementMap">
                                <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik" 
                                        frameborder="0"
                                        id="inlineFrameExample"
                                        title="Inline Frame Example"
                                />
                            </div>

                            {/* 0405_장비 및 사용자 관리 리스트 레이아웃 수정_start */}
                            <div className="listLayout_Usersetting">
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
                                </div>
                                <div>
                                    <div className="textInputListFull">
                                        <span className="ListTitle">설치주소</span>                      
                                        <input className="textInputAD" type="text" placeholder="설치주소를 입력하세요" />
                                        <Button style={{backgroundColor: '#F5F6FF' , borderRadius:'8px' , padding: '12px 32px', border: 'none' , color:'#120C0E'}} 
                                            variant="outlined"
                                            onClick={handleOpen}>
                                            주소검색
                                        </Button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description" 
                                        >
                                            <Box sx={style}>
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
                                    </div>
                                    <div className="textInputListFull">
                                        <span className="ListTitle">전화번호</span>                      
                                        <input className="textInput7" type="text" placeholder="전화번호를 입력하세요" />
                                    </div>
                                    <div className="textInputListFull">
                                        <span className="ListTitle">휴대폰 1</span>                      
                                        <input className="textInput7" type="text" placeholder="휴대폰번호를 입력하세요" />
                                    </div>
                                </div>
                            </div>
                            <div className="listBtn_Usersetting">
                                <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '8px 80px' , margin: '32px 0 64px 32px' , border: 'none' , color:'white' , fontSize: '16px'}} 
                                        variant="outlined">
                                        저 장
                                </Button>
                                <Button style={{backgroundColor: '#DADADA' , borderRadius:'8px' , padding: '8px 80px' , margin: '32px 0 64px 16px' , border: 'none' , color:'white' , fontSize: '16px'}} 
                                        variant="outlined">
                                    취 소
                                </Button>
                            </div>
                            {/* 0405_장비 및 사용자 관리 리스트 레이아웃 수정_end */}
                            
                            
                            {/* <div>
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
                                    <Button style={{backgroundColor: '#F5F6FF' , borderRadius:'8px' , padding: '12px 32px', border: 'none' , color:'#120C0E'}} 
                                        variant="outlined"
                                        onClick={handleOpen}>
                                        주소검색
                                    </Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description" 
                                    >
                                        <Box sx={style}>
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
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}