//Created by MyEclipse Struts
// XSL source (default): platform:/plugin/com.genuitec.eclipse.cross.easystruts.eclipse_3.8.4/xslt/JavaClass.xsl

package expressshow;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;
import javax.servlet.http.*;
import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

/** 
 * MyEclipse Struts
 * Creation date: 11-11-2006
 * 
 * XDoclet definition:
 * @struts:action validate="true"
 * @struts:action-forward name="success" path="/addbus1.jsp"
 * @struts:action-forward name="fail" path="/Index.jsp"
 */
public class GetBusTypeAction extends Action {

	// --------------------------------------------------------- Instance Variables

	// --------------------------------------------------------- Methods

	/** 
	 * Method execute
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return ActionForward
	 */
	public ActionForward execute(
		ActionMapping mapping,
		ActionForm form,
		HttpServletRequest request,
		HttpServletResponse response)throws Exception {
		ArrayList bustype=new ArrayList();
		bustype=Validation.getBusType(getDataSource(request));
		System.out.println("Before check");
		if(bustype!=null)
		{
			System.out.println("after check");
        HttpSession hs=request.getSession();
        hs.setAttribute("bustype",bustype);
        return mapping.findForward("success");
		}
		return mapping.findForward("fail");
	}

}