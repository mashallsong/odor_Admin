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
                                    <li>비밀번호</li>
                                    <li>전화번호</li>
                                    <li>주소</li>
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
                                    <li>abc123</li>
                                    <li>031-000-0000</li>
                                    <li className="textAddress">경기도 시흥시 시흥대로 123번지 ...</li>
                                    <li>홍길동</li>
                                    <li>010-0000-0000</li>
                                </ul>

                            </div>
                            <div className="ManagementBtn">
                                <Button style={{backgroundColor: '#D5D5D5' , borderRadius:'8px' , padding: '6px 32px', marginRight: '8px' , border: 'none' , color:'white'}} 
                                        variant="outlined">
                                        출 력
                                </Button>
                                <Button style={{backgroundColor: '#D5D5D5' , borderRadius:'8px' , padding: '6px 32px', marginRight: '8px' , border: 'none' , color:'white'}} 
                                        variant="outlined">
                                        삭 제
                                </Button>
                                <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '6px 32px', border: 'none' , color:'white'}} 
                                        variant="outlined">
                                        저 장
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
    )
}