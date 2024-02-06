import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-native-responsive-grid-system';

export const Alert = ({ type, show, heading, body }) => {
    const [visible, setVisible] = useState(show);
  let backgroundColor = '';
  let color = '';

  switch (type) {
    case 'success':
      backgroundColor = '#d4edda';
      color = '#155724';
      break;
    case 'warning':
      backgroundColor = '#fff3cd';
      color = '#856404';
      break;
    case 'danger':
      backgroundColor = '#f8d7da';
      color = '#721c24';
      break;
    default:
      backgroundColor = '#cce5ff';
      color = '#004085';
  }

  const handleClose = () => {
    setVisible(false);
  };

  const CloseButton = ()=>{
    return (<TouchableOpacity style={styles.closeButton} onPress={()=>handleClose()}>
        <Icon name="close-circle-outline" size={24} color="#687180" />
    </TouchableOpacity>);
  };

  return (<>
  {visible && (
    <View style={[styles.alert, { backgroundColor }]}>
    {heading?(
                    <>
                    <Row rowStyles={{ borderBottomWidth: 1, borderColor: '#ccc', marginBottom: '2%' }}>
                        <Col xs={10} sm={10} md={10} lg={10}>
                            <Text style={[styles.alertHeading]}>{heading}</Text>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2}>
                            <CloseButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Text style={[styles.alertBody]}>{body}</Text>
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
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,

      },
      alertBody: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      closeButton: {
        alignItems: 'flex-end',
        marginLeft: 10,
      },
});
