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

export default function Management(){

    const [PartNo, setList] = React.useState('');

    const handleChange = (event) => {
        setList(event.target.value);
    };
    
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
                                    <FontAwesomeIcon icon={faLocationDot} style={{ color: '#F29729' , fontSize: '26px' }} /> <span>데이터 에러-통신오류</span>                                    </div>
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
                                    <Button style={{backgroundColor: '#D5D5D5' , borderRadius:'8px' , padding: '6px 32px', marginRight: '8px' , border: 'none' , color:'white'}} 
                                            variant="outlined">
                                            출력
                                    </Button>
                                    <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '6px 32px', border: 'none' , color:'white'}} 
                                            variant="outlined">
                                            저장
                                    </Button>
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