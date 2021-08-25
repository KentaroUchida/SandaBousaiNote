import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import ImageList from '@material-ui/core/ImageList';

/*
props:
  items  チェックボックスの各要素
  onChange  チェックボックスが更新された際のID
  getPath  画像のパスを取得するための関数
*/
export default function Checkbox2Lines(props) {
  const items = props.items;
  return (
    <FormGroup row>
      <ImageList cols={2} rowHeight="auto">
        {Object.keys(items).map(key => {
          return (
            <Card key={key}>
              <CardActionArea onClick={event => {
                event.target.name = key;
                event.target.checked = !items[key].checked
                props.onChange(event);
              }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={items[key].checked} onChange={props.onChange} name={key}
                    />
                  }
                  label={items[key].name}
                />
                <CardMedia
                  component="img"
                  alt={key}
                  image={props.getPath(key)}
                  title={items[key].name}
                />
              </CardActionArea>
            </Card>
          );
        })}
      </ImageList>
    </FormGroup>
  );
}
