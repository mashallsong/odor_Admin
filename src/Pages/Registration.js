import React from "react";
import '../Css/Header.css';
import '../Css/Body.css';

import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

/* Radio Group */
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


/* 폰트어썸 import */
import {faMagnifyingGlass, faWrench} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Registration(){
    return (
        <div className="container">
            <div className="header-wrap">
                <div className="headerBtn">
                    <h1>장비등록</h1>
                    <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '0px 32px', border: 'none' , color:'white' , marginLeft: '32px' , fontSize: '16px'}} 
                            variant="outlined" href="/Registration">
                            신규등록
                    </Button>
                    <Button style={{backgroundColor: '#DADADA' , borderRadius:'8px' , padding: '0px 32px', border: 'none' , color:'white' , marginLeft: '16px' , fontSize: '16px'}} 
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

            <div className="bodyRegistration">
                <div className="RegistrationGrop1">
                    <div className="RegistrationLayout">
                        <div className="setting-layout-header">
                            <h3>장비 및 사용자 신규 등록</h3> <span>New equipment and user registration</span>
                        </div>
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
                                        장비등록
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}