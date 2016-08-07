﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Site/Admin/SiteAdminMaster.Master" AutoEventWireup="true" CodeBehind="CreateCategory.aspx.cs" Inherits="DiscussionForum.Site.Admin.CreateCategory" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="row">
        <div class="col-xs-12">
            <div id="error" runat="server" class="alert alert-danger"></div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-1">
            <label class="control-label">Name:</label>
        </div>
        <div class="col-xs-8">
            <asp:TextBox ID="txtName" CssClass="form-control" runat="server"></asp:TextBox>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12">
            <asp:Button ID="btnSubmit" Style="display: none;" runat="server" Text="Button" OnClick="btnSumbit_Click" />
            <button id="btnCreate" class="btn btn-default" onclick="validateCreateCategory(); return false;">Create</button>
        </div>
    </div>
</asp:Content>
