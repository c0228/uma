import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-native-responsive-grid-system';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '@AppUtils/ColorManagement.js';

export const Alert = ({ type, show, heading, body }) => {
    const [visible, setVisible] = useState(show);
  let icon = '';
  let backgroundColor = '';
  let headerColor = '';
  let color = '';

  switch (type) {
    case 'success':
      icon = (<FontAwesome5 name='check-circle' size={14} color={COLORS.DARK_GREEN} style={{ marginTop:3, marginRight:3 }} />);
      backgroundColor = COLORS.LIGHT_GREEN;
      headerColor = COLORS.DARK_GREEN;
      color = COLORS.MEDIUM_GREEN;
      break;
    case 'warning':
      icon = (<FontAwesome5 name='exclamation-triangle' size={12} color={COLORS.DARK_YELLOW} style={{ marginTop:3, marginRight:3 }} />);
      backgroundColor = COLORS.LIGHT_YELLOW;
      headerColor = COLORS.DARK_YELLOW;
      color = COLORS.DARK_YELLOW;
      break;
    case 'danger':
      icon = (<FontAwesome5 name='exclamation-triangle' size={12} color={COLORS.DARK_RED} style={{ marginTop:3, marginRight:3 }} />);
      backgroundColor = COLORS.LIGHT_RED;
      headerColor = COLORS.DARK_RED;
      color = COLORS.DARK_RED;
      break;
    default:
      backgroundColor = '#cce5ff';
      headerColor = '';
      color = '#004085';
  }

  const handleClose = () => {
    setVisible(false);
  };

  const CloseButton = ()=>{
    return (<TouchableOpacity style={styles.closeButton} onPress={()=>handleClose()}>
        <Icon name="close-circle-outline" size={24} color={headerColor} />
    </TouchableOpacity>);
  };

  return (<>
  {visible && (
    <View style={[styles.alert, { backgroundColor }]}>
    {heading?(
                    <>
                    <Row rowStyles={{ borderBottomWidth: 1, borderColor: '#ccc', marginBottom: '2%' }}>
                        <Col xs={10} sm={10} md={10} lg={10}>
                          <View style={{ flexDirection:'row' }}>
                            {icon}
                            <Text style={[styles.alertHeading,{ color: headerColor }]}>{heading}</Text>
                          </View>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2}>
                            <CloseButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Text style={[styles.alertBody,{ color: color }]}>{body}</Text>
                        </Col>
                    </Row>
                    </>
                ):(<Row>
                    <Col xs={10} sm={10} md={10} lg={10}>
                        <Text style={[styles.alertBody]}>{body}</Text>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                        <CloseButton />
                    </Col>
                </Row>
                )}
    </View>
  )}
  </>);
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'danger', 'info']),
  body: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    alert: {
        padding: 10,
        borderRadius: 4
      },
      alertHeading: {
        paddingBottom:'1%',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,

      },
      alertBody: {
        fontSize: 14,
      },
      closeButton: {
        alignItems: 'flex-end',
        marginLeft: 10,
      },
});
