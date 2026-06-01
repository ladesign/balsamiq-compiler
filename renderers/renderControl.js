import { Accordion } from "./Accordion.js";
import { Alert } from "./Alert.js";
import { Arrow } from "./Arrow.js";
import { BarChart } from "./BarChart.js";
import { BlockOfText } from "./BlockOfText.js";
import { BreadCrumbs } from "./BreadCrumbs.js";
import { BrowserWindow } from "./BrowserWindow.js";
import { Button } from "./Button.js";
import { ButtonBar } from "./ButtonBar.js";
import { Callout } from "./Callout.js";
import { Canvas } from "./Canvas.js";
import { CheckBox } from "./CheckBox.js";
import { ComboBox } from "./ComboBox.js";
import { Component } from "./Component.js";
import { CoverFlow } from "./CoverFlow.js";
import { DataGrid } from "./DataGrid.js";
import { DateChooser } from "./DateChooser.js";
import { FieldSet } from "./FieldSet.js";
import { HRule } from "./HRule.js";
import { HScrollBar } from "./HScrollBar.js";
import { HSlider } from "./HSlider.js";
import { Icon } from "./Icon.js";
import { IconLabel } from "./IconLabel.js";
import { Image } from "./Image.js";
import { Label } from "./Label.js";
import { LineChart } from "./LineChart.js";
import { Link } from "./Link.js";
import { LinkBar } from "./LinkBar.js";
import { List } from "./List.js";
import { Map } from "./Map.js";
import { MediaControls } from "./MediaControls.js";
import { Menu } from "./Menu.js";
import { MenuBar } from "./MenuBar.js";
import { NumericStepper } from "./NumericStepper.js";
import { Paragraph } from "./Paragraph.js";
import { PieChart } from "./PieChart.js";
import { PointyButton } from "./PointyButton.js";
import { ProgressBar } from "./ProgressBar.js";
import { RadioButton } from "./RadioButton.js";
import { RoundButton } from "./RoundButton.js";
import { Shape } from "./Shape.js";
import { StickyNote } from "./StickyNote.js";
import { SubTitle } from "./SubTitle.js";
import { Switch } from "./Switch.js";
import { TabBar } from "./TabBar.js";
import { TextArea } from "./TextArea.js";
import { TextInput } from "./TextInput.js";
import { Title } from "./Title.js";
import { TitleWindow } from "./TitleWindow.js";
import { Tooltip } from "./Tooltip.js";
import { TreePane } from "./TreePane.js";
import { VRule } from "./VRule.js";
import { VScrollBar } from "./VScrollBar.js";
import { VSlider } from "./VSlider.js";
import { VideoPlayer } from "./VideoPlayer.js";
import { iPad } from "./iPad.js";
import { iPhone } from "./iPhone.js";

export function renderControl(control) {
  switch (control.typeID) {
    case "Accordion":
      return Accordion(control);
    case "Alert":
      return Alert(control);
    case "Arrow":
      return Arrow(control);
    case "BarChart":
      return BarChart(control);
    case "BlockOfText":
      return BlockOfText(control);
    case "BreadCrumbs":
      return BreadCrumbs(control);
    case "BrowserWindow":
      return "";
    case "Button":
      return Button(control);
    case "ButtonBar":
      return ButtonBar(control);
    case "Callout":
      return Callout(control);
    case "Canvas":
      return Canvas(control);
    case "CheckBox":
      return CheckBox(control);
    case "ComboBox":
      return ComboBox(control);
    case "Component":
      return Component(control);
    case "CoverFlow":
      return CoverFlow(control);
    case "DataGrid":
      return DataGrid(control);
    case "DateChooser":
      return DateChooser(control);
    case "FieldSet":
      return FieldSet(control);
    case "HRule":
      return HRule(control);
    case "HScrollBar":
      return HScrollBar(control);
    case "HSlider":
      return HSlider(control);
    case "Icon":
      return Icon(control);
    case "IconLabel":
      return IconLabel(control);
    case "Image":
      return Image(control);
    case "Label":
      return Label(control);
    case "LineChart":
      return LineChart(control);
    case "Link":
      return Link(control);
    case "LinkBar":
      return LinkBar(control);
    case "List":
      return List(control);
    case "Map":
      return Map(control);
    case "MediaControls":
      return MediaControls(control);
    case "Menu":
      return Menu(control);
    case "MenuBar":
      return MenuBar(control);
    case "NumericStepper":
      return NumericStepper(control);
    case "Paragraph":
      return Paragraph(control);
    case "PieChart":
      return PieChart(control);
    case "PointyButton":
      return PointyButton(control);
    case "ProgressBar":
      return ProgressBar(control);
    case "RadioButton":
      return RadioButton(control);
    case "RoundButton":
      return RoundButton(control);
    case "Shape":
      return Shape(control);
    case "StickyNote":
      return StickyNote(control);
    case "SubTitle":
      return SubTitle(control);
    case "Switch":
      return Switch(control);
    case "TabBar":
      return TabBar(control);
    case "TextArea":
      return TextArea(control);
    case "TextInput":
      return TextInput(control);
    case "Title":
      return Title(control);
    case "TitleWindow":
      return TitleWindow(control);
    case "Tooltip":
      return Tooltip(control);
    case "TreePane":
      return TreePane(control);
    case "VRule":
      return VRule(control);
    case "VScrollBar":
      return VScrollBar(control);
    case "VSlider":
      return VSlider(control);
    case "VideoPlayer":
      return VideoPlayer(control);
    case "iPad":
      return iPad(control);
    case "iPhone":
      return iPhone(control);
    default:
      return "";
  }
}
