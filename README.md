### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Import components
-
import Tooltip from 'components/Tooltip';
import Tip from 'components/Tooltip';

# Tooltip API
The API documentation of the Tooltip React component. Learn more about the props.


| Name          |   Type    | Default  |  Description                                          |
|---------------|:---------:|---------:|------------------------------------------------------:|
| children      | element   |          | Need to contain the Tip component                     |
| isMouseFollow | boolean   | false    | If true, the tooltip follow the cursor.               |
| position      | -bottom   | bottom   | If isMouseFollow false, place the tips                |
|               | -left     |          |                                                       |
|               | -right    |          |                                                       |
|               | -top      |          |                                                       |


# Tip API
The API documentation of the Tip React component. Learn more about the props.

| Name          |   Type    | Default  |  Description                                          |
|---------------|:---------:|---------:|------------------------------------------------------:|
| children      | element   |          | 1st children is the targeted element to give a tip    |
|               |           |          | 2nd children is the tip (HTML or Component)           |